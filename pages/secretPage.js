// this is a sample format for a protected page. 

import {useState, useEffect} from "react";
import {useSession} from "next-auth/react";

export default function SecretPage() {
    const { data: session, status } = useSession()
    const [content, setContent] = useState();

  // Fetch from super secret and fetch something if there's a content there

  useEffect(() => {
    const fetchData = async() => {
        const res = await fetch("/api/secret");
        const json = await res.json();

        if (json.content){
            setContent(json.content)
        }
    }
    fetchData(); 
  }, [session]); // this assures this effect only runs per session.

  if( typeof window !== "undefined") return
  null;

  if (!session){
    return (
        <main>
            <div>
                <h1>You are not signed in, please sign in first.</h1>
            </div>
        </main>
    )
  }
  return (
    <main>
        <div>
            <h1>Protected Page</h1>
            <p>{content}</p>
        </div>
    </main>

  )
}