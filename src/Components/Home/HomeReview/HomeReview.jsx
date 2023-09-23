import homeReviewImage from '../../../assets/images/home-review.jpg';
const HomeReview = () => {
    const fakeReviews = [
        {
            name: "Lauren Munoj",
            review: "” Aenean sollicitudin, quis auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio. “"
        },
        {
            name: "Ronald Snyder",
            review: "” Aenean sollicitudin, quis auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio. “"
        },
        {
            name: "Jessica Hawkins",
            review: "” Aenean sollicitudin, quis auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio. “"
        },
        {
            name: "Sean West",
            review: "” Aenean sollicitudin, quis auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio. “"
        },
    ]
    return (
        <>
            <div class="flex items-center justify-center h-screen" style={{ backgroundImage: `url(${homeReviewImage})` }}>
                <div class="bg-gray-300 p-4 rounded-lg grid grid-cols-2 mx-36">
                    {
                        fakeReviews.map(fakeReview => <ReviewDetail key={fakeReview.name} fakeReview={fakeReview}></ReviewDetail>)
                    }
                </div>
            </div>
        </>
    )
}

const ReviewDetail = ({ fakeReview }) => {
    const { name, review } = fakeReview;
    return (
        <>
            <div className='bg-slate-950 px-4 text-white m-3'>
                <p className='text-xl py-3'>{review}</p>
                <h1 className='text-3xl italic font-bold'>{name}</h1>
            </div>

        </>
    )
}

export default HomeReview;