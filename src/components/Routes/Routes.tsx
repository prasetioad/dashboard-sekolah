import { Home, Book, Users } from "lucide-react"; // sementara pake lucide
import Dashboard from "../../pages/Academic/Dashboard/Dashboard";
import Presensi from "../../pages/Academic/Presence/Presensi";
import Rapor from "../../pages/Academic/Report/Rapor";


export default (privilege:string) => [
    { 
        label: "Dashboard", 
        icon: Home, 
        path: '/', 
        view: Dashboard 
    },
    { 
        label: "Presensi", 
        icon: Users, 
        path: '/presensi', 
        view: Presensi },
    { 
        label: "Rapor", 
        icon: Book, 
        path: '/rapor', 
        view: Rapor },
]
