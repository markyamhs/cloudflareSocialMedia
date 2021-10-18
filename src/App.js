import Layout from './components/layout'
import Posts from './components/posts'
import SubmitForm from './components/form'
import Login from './components/login'
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap"
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState(0);
  const [username, setUser] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const handleLogin = () => setShowLogin(true);
  useEffect(() => {
    const getPosts = async () => {
      try{
        const resp = await fetch(
          'https://backend.markyamhs.workers.dev/posts',
          {
            mode: 'cors',
            method: "get"
          }
        );
        const postResp = await resp.json();
        setPosts(postResp);
      }catch(e){
        console.log(e)
      }
    };

    getPosts();
  }, [query]);

  return (
    <Layout username={username} handleLogin={handleLogin}>
      <Login show={showLogin} setShow={setShowLogin} setUser={setUser}/>
      <Container>
        <h4>Welcome, {username}!</h4>
      </Container>
      <SubmitForm {...{query, setQuery, username}}/>
      <Posts {...{query, setQuery, username, posts}}/>
    </Layout>
  );
}

export default App;
