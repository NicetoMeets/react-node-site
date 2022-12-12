import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useAuthDispatch, useAuthState } from "../context/auth";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { FaSearch } from "react-icons/fa";
import { faDizzy } from "@fortawesome/free-regular-svg-icons";


const NavBar: React.FC = () => {
    const { loading, authenticated } = useAuthState();
    const dispatch = useAuthDispatch();
    
    const handleLogout = () => {
        axios.post("/auth/logout")
            .then(() => {
                dispatch("LOGOUT");
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-between px-3 pt-2 pb-2 bg-white h-13">
            <span className="text-2xl font-semibold text-gray-400">
                <Link href="/" legacyBehavior>
                <a>
                <FontAwesomeIcon icon={faDizzy} />
                <span className= "text-xl ml-2" >Dizzy</span>
                </a>
                </Link>
                <Link href="http://naver.com" legacyBehavior>
                <a>
                <span className= "text-xl ml-20" >Movieflex</span>
                </a>
                </Link>
                <Link href="http://naver.com" legacyBehavior>
                <a>
                <span className= "text-xl ml-20" >TodoApp</span>
                </a>
                </Link>
                <Link href="http://naver.com" legacyBehavior>
                <a>
                <span className= "text-xl ml-20" >Tetris</span>
                </a>
                </Link>
                <Link href="http://naver.com" legacyBehavior>
                <a>
                <span className= "text-xl ml-20" >Tetris</span>
                </a>
                </Link>
                <Link href="http://naver.com" legacyBehavior>
                <a>
                <span className= "text-xl ml-20" >Tetris</span>
                </a>
                </Link>
            </span>
            
            <div className="flex">
                {!loading && (
                    authenticated ? (
                        <button
                            className="w-20 px-2 mr-2 text-sm text-center text-white bg-gray-400 rounded h-7"
                            onClick={handleLogout}
                        >
                            로그아웃
                        </button>
                    ) : (<>
                        <Link href="/login" legacyBehavior>
                            <a className="w-20 px-2 pt-1 mr-2 text-sm text-center text-blue-500 border border-blue-500 rounded h-7">
                                로그인
                            </a>
                        </Link>
                        <Link href="/register" legacyBehavior>
                            <a className="w-20 px-2 pt-1 text-sm text-center text-white bg-gray-400 rounded h-7">
                                회원가입
                            </a>
                        </Link>
                    </>)
                )}
            </div>
        </div>
    )
}

export default NavBar