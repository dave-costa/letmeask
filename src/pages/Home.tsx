import ilustration from '../assets/illustration.svg'
import logo from '../assets/logo.svg'
import iconImage from '../assets/google-icon.svg'
//assim que usa svg
import '../styles/auth.scss'
import Button from '../components/Button'
export default function Home() {
    return (
        <div className="page-auth">
            <aside>
                <img className="img-aside" src={ilustration} alt="illustration" />
                <strong>create rooms for Q and A</strong>
                <p>ask your questionss</p>
            </aside>
            <main>
                <div className="content">
                    <img className="logo-img" src={logo} alt="logo" />
               
                    <button className="btn-create">
                        <img  src={iconImage} alt="icon" />
                        Create rooms                   
                    </button>
                    <div className="separator">Login</div>
                    <form>
                        <input 
                        type="text" 
                        placeholder="code"
                        />
                        <Button>Enter the room</Button>
                    </form>
                 </div>
            </main>
        </div>
    )
}
