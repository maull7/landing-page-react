import heroImg from "../assets/laptop.jpg";
import aboutImg from "../assets/about.jpg";

import aktivasi from "../assets/aktivasi.png";
import istall from "../assets/install-ulang.jpg";
import microsoft from "../assets/microsoft.png"
const Home = () => {
    return(
        <div className="home" id="home">
            <div className="container mx-auto px-4">
                <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
                    <div className="box">
                        <h1 className="lg:text-5xl/tight text-3xl/tight font-medium mb-7 text-cyan-950">Laptop anda bermasalah ? <span className="text-cyan-500 underline hover:text-cyan-700">Konsultasikan disini</span></h1>
                        <p className="text-base/2 mb-7">Anda bisa Konsultasikan beberapa masalah laptop atau PC anda disini</p>
                        <a href="" className="bg-cyan-500 hover:bg-cyan-700 transition-all py-2 px-4 text-white shadow rounded-full">
                            Tentang Kami <i className="ri-eye-line ms-1"></i>
                        </a>
                    </div>
                    <div className="box">
                        <img src={heroImg} alt="hero image" className="md:w-full w-[400px] mx-auto md:m-0 rounded-md" />
                    </div>
                </div>

                <div className="about grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-16 md:pt-24" id="about">
                    <div className="box">
                        <img src={aboutImg} alt="about image" className="md:w-full w-[400px] mx-auto md:m-0 rounded-md"/>
                    </div>
                    <div className="box">
                        <h1 className="lg:text-3xl/tight text-2xl/tight font-medium mb-7 text-cyan-950">Kami melayani beberapa kerusakan <span className="text-cyan-500 underline">software</span></h1>
                        <p className="text-base/2 mb-7">Anda bisa Konsultasikan beberapa masalah laptop atau PC anda disini</p>
                        <a href="" className="bg-cyan-500 hover:bg-cyan-700 transition-all py-2 px-4 text-white shadow rounded-full">
                            Layanan kami <i className="ri-eye-line ms-1"></i>
                        </a>
                    </div>
                </div>


                <div className="service pt-16 md:pt-24" id="service">
                    <h1 className="text-center lg:text-5xl/tight text-3xl text-cyan-950 font-medium mb-2">Layanan Kami</h1>
                    <div className="services-box grid md:grid-cols-3 grid-cols-1 gap-6 pt-6">
                        <div className="box bg-cyan-500 rounded-lg shadow p-4">
                        
                            <h1 className="text-center text-white font-medium text-3xl py-4 pt-2">Install ulang windows</h1>
                            <p className="text-white">Kami bisa melayani untuk melakukan install ulang windows</p>
                        </div>
                   
                        <div className="box bg-cyan-500 rounded-lg shadow p-4">
                        
                            <h1 className="text-center text-white font-medium text-3xl">Aktivasi windows</h1>
                            <p className="text-white">Kami bisa melayani untuk melakukan aktivasi bagi windows yang tidak tertaktivasi</p>
                        </div>
                        <div className="box bg-cyan-500 rounded-lg shadow p-4">
                        
                            <h1 className="text-center text-white font-medium text-3xl">Aktivasi microsoft</h1>
                            <p className="text-white">Kami bisa melayani untuk melakukan aktivasi microsoft</p>
                        </div>
                        </div>
                </div>

                <div className="project md:pt-20 pt-16" id="proyek">
  <h2 className="text-center lg:text-5xl text-3xl font-medium mb-4">Proyek</h2>
  <p className="text-center text-gray-600 mb-8">Proyek yang biasa kami kerjakan</p>
  <div className="project-box grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
    <div className="box bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <img src={istall} alt="install ulang" className="w-full h-[220px] object-cover" />
      <div className="p-6">
        <h1 className="text-center text-xl font-semibold text-gray-800 mb-4">Install ulang Windows</h1>
        <p className="text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, impedit tempore earum animi amet quasi dolorem vero laborum, harum dolorum nulla corporis suscipit officia, iure quo labore eum quam maxime!
        </p>
      </div>
    </div>
    <div className="box bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <img src={aktivasi} alt="aktivasi" className="w-full h-[220px] object-cover" />
      <div className="p-6">
        <h1 className="text-center text-xl font-semibold text-gray-800 mb-4">Aktivasi Windows</h1>
        <p className="text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, impedit tempore earum animi amet quasi dolorem vero laborum, harum dolorum nulla corporis suscipit officia, iure quo labore eum quam maxime!
        </p>
      </div>
    </div>
    <div className="box bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <img src={microsoft} alt="microsoft" className="w-full h-[220px] object-cover" />
      <div className="p-6">
        <h1 className="text-center text-xl font-semibold text-gray-800 mb-4">Install Ulang Windows</h1>
        <p className="text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, impedit tempore earum animi amet quasi dolorem vero laborum, harum dolorum nulla corporis suscipit officia, iure quo labore eum quam maxime!
        </p>
      </div>
    </div>
  </div>
</div>


            </div>
        </div>


    )
}

export default Home