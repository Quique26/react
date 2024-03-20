import { dividerClasses } from "@mui/material";

export const userColumns = [
    { field: "id", headerName: "ID", width: 70, },
    { field: "user", headerName: "User", width: 230, renderCell: (params) => {
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
        )
    }},
    { field: "email", headerName: "Email", width: 230, },
    { field: "age", headerName: "Age", width: 100, },
    { field: "status", headerName: "Status", width: 160, renderCell: (params) => {
        return(
            <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
            </div>
        )
    }},
];

export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/1820710/pexels-photo-1820710.jpeg",
        email: "snow@gmail.com",
        status: "active",
        age: 35,
        
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "https://images.pexels.com/photos/941623/pexels-photo-941623.jpeg",
        email: "jamie@gmail.com",
        status: "passive",
        age: 42,
        
    },
    {
        id: 3,
        username: "Lannister",
        img: "https://images.pexels.com/photos/941603/pexels-photo-941603.jpeg",
        email: "lannister@gmail.com",
        status: "pending",
        age: 45,
        
    },
    {
        id: 4,
        username: "Stark",
        img: "https://images.pexels.com/photos/1820700/pexels-photo-1820700.jpeg",
        email: "stark@gmail.com",
        status: "active",
        age: 16,
        
    },
    {
        id: 5,
        username: "Targaryen",
        img: "https://images.pexels.com/photos/1820750/pexels-photo-1820750.jpeg",
        email: "targaryen@gmail.com",
        status: "passive",
        age: 22,
        
    },
    {
        id: 6,
        username: "Melisandre",
        img: "https://images.pexels.com/photos/941663/pexels-photo-941663.jpeg",
        email: "melisandre@gmail.com",
        status: "active",
        age: 15,
        
    },
    {
        id: 7,
        username: "Clifford",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg",
        email: "clifford@gmail.com",
        status: "passive",
        age: 44,
        
    },
    {
        id: 8,
        username: "Frances",
        img: "https://images.pexels.com/photos/1820780/pexels-photo-1820780.jpeg",
        email: "frances@gmail.com",
        status: "active",
        age: 36,
        
    },
    {
        id: 9,
        username: "Roxie",
        img: "https://images.pexels.com/photos/1820790/pexels-photo-1820790.jpeg",
        email: "roxie@gmail.com",
        status: "pending",
        age: 65,
        
    },
    {
        id: 10,
        username: "Roxie",
        img: "https://images.pexels.com/photos/941683/pexels-photo-941683.jpeg",
        email: "10roxie@gmail.com",
        status: "active",
        age: 65,
        
    },
    
];