const items= [
    {id:1, name:"Product1", price:700, code:"0001"},
    {id:2, name:"Product2", price:700, code:"0002"},
    {id:3, name:"Product3", price:500, code:"0003"},
    {id:4, name:"Product4", price:500, code:"0004"},
]

export function Products() {


    const productsList = items.map(item =>
        <div>
            <h3>{item.name}</h3>
            <p>KSH:{item.price}</p>
            <p>CODE:{item.code}</p>
        </div>
    )

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        {productsList}
                    </div>
                </div>
            </div>
        </>
    )
}