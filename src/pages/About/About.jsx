

export default function About() {
  return (
    <div className="container p-16 flex m-auto">
        <div className="what-we-do">
            <div className="about-header">
                <h2 className="font-san text-3xl"><span className="underline font-bold">What</span> We Do</h2>
            </div>
            <div className="about-wrap grid  md:grid-cols-2 gap-10">
                <div className="about-text text-justify ">
                    <h3 className="font-bold text-xl">Comprehensive Catering Service</h3>
                    <p className="hidden md:block">We offer a full range of catering solutions, including meal planning, preparation, and delivery, 
                        designed to meet the diverse dietary and operational needs of our clients in the oil and gas industry.</p>
                </div>
                <div className="about-text">
                    <h3 className="font-bold text-xl">Quality and Safety</h3>
                    <p>We prioritize quality and safety in every aspect of our catering operations. Our team of experienced chefs and support
                         staff adhere to stringent hygiene and safety protocols to deliver meals that are both nutritious and safe.</p>
                </div>
                <div className="about-text">
                    <h3 className="font-bold text-xl">Offshore Catering</h3>
                    <p>Our offshore catering services are designed to support the demanding schedules and conditions of offshore rigs and installations. We ensure that every meal is not only delicious but also meets the highest standards of safety and nutrition, 
                        contributing to the well-being and efficiency of the crew.</p>
                </div>
                
                <div className="about-text">
                    <h3 className="font-bold text-xl">Tailored Solutions</h3>
                    <p>Understanding the unique challenges and environments of the oil and gas sector, 
                        we offer tailored catering solutions that address the specific needs of our clients,
                         ensuring satisfaction and operational continuity.</p>
                </div>
                <div className="about-text">
                    <h3 className="font-bold text-xl">Onshore Catering</h3>
                    <p>For onshore locations, we provide customized catering solutions that enhance the dining experience for personnel working in various oil and gas facilities. Our services are flexible and responsive, capable of adapting to different site requirements and client preferences.</p>
                </div>
                <div className="about-text">
                   <button>Learn more</button>
                </div>
            </div>
        </div>

    </div>
  )
}
