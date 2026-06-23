import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
function Layout({ children }) {
    return (
        <div className="bg-[var(--bg)] min-h-screen text-white">
            <Navbar />

            <main className="pt-10">
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout