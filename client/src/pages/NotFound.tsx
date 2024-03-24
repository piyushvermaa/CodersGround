import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div>
      <section className="page_404  bg-white text-black h-[calc(100vh-60px)] font-serif">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-screen-md">
              <h1 className="text-center text-[#ff3737] text-9xl">404</h1>
            <div className="four_zero_four_bg bg-cover bg-center h-96" style={{ backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)' }}>
            </div>
            <div className="contant_box_404 mt-2 text-center">
              <h3 className="text-4xl font-bold">Look like you're lost</h3>
              <p>the page you are looking for is not available!</p>
              <Link to="/" className="link_404 inline-block px-8 py-4 bg-green-500 text-white rounded-lg mt-4">Go to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
