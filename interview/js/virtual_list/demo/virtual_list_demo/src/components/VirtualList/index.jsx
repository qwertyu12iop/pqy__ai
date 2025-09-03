import { useRef, useState, useEffect } from 'react';

const VirtualList = ({
    data = [],          // 总数据，默认空数组
    height = 500,       // 容器高度，默认500px
    itemHeight = 50,    // 每个item高度，默认50px
    renderItem,         // 自定义渲染item的函数
    overscan = 3        // 预渲染数量，默认3
}) => {
    // 1. 用ref获取容器DOM，避免每次render重新获取
    const containerRef = useRef(null);

    // 2. 管理起始索引和偏移量（状态变了才重新渲染）
    const [startIndex, setStartIndex] = useState(0);
    const [offset, setOffset] = useState(0);

    // 3. 计算总高度（撑起滚动条用）
    const totalHeight = data.length * itemHeight;

    // 4. 计算可视范围的核心函数
    const calculateVisibleRange = () => {
        if (!containerRef.current) return;

        const { scrollTop } = containerRef.current; // 获取滚动距离

        // 计算起始索引：滚过的距离 / 每个item高度，向下取整
        const newStartIndex = Math.max(0, Math.floor(scrollTop / itemHeight));

        // 计算可视item数量：容器高度 / 每个item高度，向上取整（避免漏一个）
        const visibleCount = Math.ceil(height / itemHeight);

        // 计算结束索引：起始 + 可视数量 + 预渲染，不超过总数据长度
        const newEndIndex = Math.min(
            data.length,
            newStartIndex + visibleCount + overscan
        );

        // 计算偏移量：起始索引 * 每个item高度（用于定位）
        const newOffset = newStartIndex * itemHeight;

        // 只有起始索引变了，才更新状态（避免频繁render）
        if (newStartIndex !== startIndex) {
            setStartIndex(newStartIndex);
            setOffset(newOffset);
        }

        // 返回当前要渲染的索引范围（用于slice数据）
        return { start: newStartIndex, end: newEndIndex };
    };

    // 5. 监听滚动事件：滚动时重新计算可视范围
    const onScroll = () => {
        calculateVisibleRange();
    };

    // 6. 初始化时计算一次（页面加载时就渲染正确的内容）
    useEffect(() => {
        calculateVisibleRange();
        // 依赖：容器高度、item高度、数据长度变化时，重新计算
    }, [height, itemHeight, data.length]);

    // 7. 获取当前要渲染的数据（切片：只取可视范围+预渲染的数据）
    const { start = 0, end = 0 } = calculateVisibleRange() || {};
    const visibleData = data.slice(start, end);

    return (
        <div
            ref={containerRef}
            onScroll={onScroll}
            style={{
                height: `${height}px`,        // 固定容器高度
                overflowY: 'auto',            // 垂直滚动
                position: 'relative',         // 子元素绝对定位用
                willChange: 'transform',      // 性能优化：告诉浏览器要变transform，提前优化
                border: '1px solid #eee'      // 加个边框，好看点
            }}
        >
            {/* 1. 占位元素：撑起滚动条，高度=总数据高度 */}
            <div
                style={{
                    height: `${totalHeight}px`,
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: -1 // 放在最下面，不影响内容
                }}
            />

            {/* 2. 实际渲染的内容：只渲染可视范围+预渲染的数据 */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    // 关键：用transform把内容挪到正确位置
                    transform: `translateY(${offset}px)`
                }}
            >
                {/* 调用renderItem渲染每个item，传入item和index */}
                {visibleData.map((item, idx) => {
                    // 注意：这里的真实索引是 start + idx（不是idx）
                    const realIndex = start + idx;
                    return renderItem(item, realIndex);
                })}
            </div>
        </div>
    );
};

export default VirtualList;