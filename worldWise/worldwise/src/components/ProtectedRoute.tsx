import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

export const ProtectedRoute = ({children}: any) => {

    const {isAuthenticated} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuthenticated) {
            navigate("/")
        }
    }, [isAuthenticated, navigate])

    return children;
}