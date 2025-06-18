import Btn_Destructive_1 from "./Destructive/Btn_Destructive_1";

export interface BtnType {
    id: number;
    name: string;
    preview: React.FC;
    code: string;  
}

export const Btn_list = [
    {
        id : 1,
        name: "Btn_Destructive_1",
        preview : Btn_Destructive_1,
        code : "null"
    }
]