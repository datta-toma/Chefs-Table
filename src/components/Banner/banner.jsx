import bannerimg from '../../assets/imag/bannerImg.jpg';
const Banner = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-5  relative">
            <img className='w-full rounded-2xl ' src={bannerimg} alt=''></img>
            
            <div className='absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 text-white space-y-5'>
                <h3 className='text-6xl font-semibold'>Discover an exceptional cooking <br></br>class tailored for you!</h3>
                <p>Over the course of the class, which can last anywhere from a couple of hours to half a day,<br></br> your English-speaking chef will teach you a whole host of techniques the Italians use to infuse their food.<br></br>At the end of this fully customizable private experience, you’ll have the time to linger over a long lunch or dinner of the food you’ve made in class.</p>
                <div className='flex gap-10'>
                <button className="btn btn-outline bg-indigo-600 text-white">Explore Now</button>
                <button className="btn btn-outline btn-secondary">Our Feedback</button>
                </div>
            </div>
            </div>

            <div className='text-center mt-16 space-y-4'>
                <h3 className='text-4xl font-semibold'>Our Recipes</h3>
                <p>A recipe is a formula of ingredients and a list of instructions for creating prepared foods.<br></br> It is used to control quality, quantity, and food costs in a foodservice operation.</p>
            </div>
        </div>

    );
};

export default Banner;