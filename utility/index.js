import { toast } from "react-toastify";

export const getLawyersData = () => {
    const LawyersData = localStorage.getItem("lawyersData");
    if(LawyersData){
        return JSON.parse(LawyersData);
    }else{
        return [];
    }
}
export const addBookingId = lawyerData => {
    const LawyersData = getLawyersData();
    const isLawyersDataExist = LawyersData.find(data => data.id === lawyerData.id)
    if(isLawyersDataExist){
        toast.error(`${isLawyersDataExist.name} Appointment Already Exist`);
        return
    }
    LawyersData.push(lawyerData)
    toast.success(`${lawyerData.name} Appointment Booked`)
    localStorage.setItem("lawyersData",JSON.stringify(LawyersData))
}

export const removeLawyersData = id => {
    const LawyersData = getLawyersData();
    const remainingLawyersData = LawyersData.filter(lawyer=>lawyer.id !== id);
    localStorage.setItem("lawyersData",JSON.stringify(remainingLawyersData));
}