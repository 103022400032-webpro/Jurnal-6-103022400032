function Panel({children, judul = null}){
    return 
    <div className = "panel"> 
        {judul}
        {children}
    </div>

}

export default Panel