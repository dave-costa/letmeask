import ilustration from '../assets/illustration.svg'
import logo from '../assets/logo.svg'
import iconImage from '../assets/google-icon.svg'
//assim que usa svg
import '../styles/auth.scss'
import Button from '../components/Button'
export default function NewRoom() {
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
               
                    <h2>Create new Room</h2>
                    <form>
                        <input 
                        type="text" 
                        placeholder="room name"
                        />
                        <Button>Create Room</Button>
                    </form>
                    <p>
                        Do you want an existing room ? <a href="#">Click here</a>
                    </p>
                 </div>
            </main>
        </div>
    )
}
