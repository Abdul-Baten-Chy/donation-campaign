

const ShowDonation = ({item}) => {
    return (
        <div >
            <div style={{backgroundColor: item.bgColor }} className={`card card-side bg-[${item.bgColor}] shadow-xl`}>
                <figure>
                     <img src={item.image} alt="Movie"/>
                </figure>
              <div className="card-body ">
                <button style={{backgroundColor: item.btnColor, color:item.color }} className="w-[80px]">{item.category}</button>
                <h2 className="card-title text-[#0B0B0B] text-[24px] font-semibold">{item.title}</h2>
                 <p style={{ color: item.color }}>${item.price}</p>
              <div className="card-actions">
                <button style={{backgroundColor: item.color, color:"white" }} className="btn btn-primary">View Details </button>
              </div>
             </div>
            </div>
        </div>
    );
};

export default ShowDonation;