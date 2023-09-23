import offerImages from "../../FakeData/FakeData";

const HomeOffer = () => {
    return (
        <>
        <div>
        <div className="text-center m-12">
            <p className="text-2xl font-bold italic">our trending</p>
            <h1 className="text-7xl font-black ">Best Offers</h1>
            <p className="py-6">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, <br /> nisi elit consequat ipsum, nec sagittis sem nibh id elit. </p>
            <button className="btn btn-active btn-accent w-48 font-bold text-white hover:text-black">VIEW ALL TOURS</button>
        </div>
        <div class="m-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row">
                {
                    offerImages.map(offerImage => <OfferDetail offerImage={offerImage}></OfferDetail>)
                }
            </div>
        </div>
            
        </>
    )
}

const OfferDetail = ({ offerImage }) => {
    const { image } = offerImage;
    return (
        <>
            <div className="hero max-h-screen h-[600px]" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay hover:bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeOffer;