import{
    Outlet
}from'react-router-dom'//二级路由容器
const Products=()=>{
    return(
        <>
        <h1>产品列表</h1>
        {/* 二级路由的占位符 */}
        <Outlet/>
        </>
    )
}
export default Products;