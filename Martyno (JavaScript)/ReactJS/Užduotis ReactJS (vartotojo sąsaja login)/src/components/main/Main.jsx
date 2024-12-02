import './Main.scss';
import '../left-section/left-section.scss';
import '../right-section/right-section.scss';

const Main = () => {
    return (
        <body>
            <main>
                <div className="container">
                    <div className="left-section">
                        <div className="content">
                            <h1>GoFinance</h1>
                            <p>The most popular peer to peer lending at SEA</p>
                            <button>Read More</button>
                        </div>
                    </div>
                <div className="right-section">
                    <div className="login-box">
                        <h2>Hello Again!</h2>
                        <p>Welcome Back</p>
                     <form>
                        <input type="email" placeholder="Email Address" required/>
                        <input type="password" placeholder="Password" required/>
                        <button type="submit">Login</button>
                     </form>
                        <a href="#">Forgot Password?</a>
                    </div>
                </div>
                </div>
            </main>
        </body>
    )
}

export default Main;