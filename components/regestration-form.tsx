"use client"
import { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
interface FormState {
    cadre: string;
    gender: string;
    parent_department: string;
    uuid: string;
    gpf_no?: string;
    first_name: string;
    middle_name?: string;
    last_name: string;
    is_active: boolean;
    is_regular: boolean;
    is_gazzetted: boolean;
    mobile_number: string;
    dob: string;
}

const initialFormState: FormState = {
    cadre: "",
    gender: "",
    parent_department: "",
    uuid: "",
    gpf_no: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    is_active: false,
    is_regular: false,
    is_gazzetted: false,
    mobile_number: "",
    dob: "",
};

export default function RegistrationForm() {
    const [formData, setFormData] = useState<FormState>(initialFormState);
    const [errors, setErrors] = useState<Partial<FormState>>({});

    const validateForm = (): boolean => {
        let newErrors: Partial<FormState> = {};
        if (!formData.cadre) newErrors.cadre = "Cadre is required";
        if (!formData.gender) newErrors.gender = "Gender is required";
        if (!formData.parent_department) newErrors.parent_department = "Parent Department is required";
        if (!formData.uuid) newErrors.uuid = "UUID is required";
        if (!formData.first_name) newErrors.first_name = "First Name is required";
        if (!formData.last_name) newErrors.last_name = "Last Name is required";
        if (!formData.mobile_number) newErrors.mobile_number = "Mobile Number is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;
        console.log("Form Data:", formData);
        toast.success("Registration Successful", { description: "User has been registered." });
        setFormData(initialFormState);
    };
    return (
        <Card>
            <CardHeader className="text-center">
                <CardTitle className="text-xl">Sign up</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="w-full grid grid-cols-2 gap-4">
                    {["cadre", "gender", "parent_department", "uuid", "gpf_no", "first_name", "middle_name", "last_name", "mobile_number"].map((field) => (
                        <div key={field}>
                            <Label htmlFor="email" className="mb-2 capitalize">{field.replace("_", " ")}</Label>
                            <Input name={field} value={formData[field as keyof FormState] as string} onChange={handleChange} />
                            {errors[field as keyof FormState] && <span className="text-red-500 text-sm">{errors[field as keyof FormState]}</span>}
                        </div>
                    ))}

                    <div>
                        <Label htmlFor="email" className="mb-2">Date of Birth</Label>
                        <Input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                    </div>

                    {["is_active", "is_regular", "is_gazzetted"].map((field) => (
                        <div key={field} className="flex items-center space-x-2">

                            <label className="peer ...">
                                <input type="checkbox" className="red-800" name={field} checked={formData[field as keyof FormState] as boolean} onChange={handleChange} />
                            </label>
                            <span className="capitalize">{field.replace("_", " ")}</span>
                        </div>
                    ))}
                </form>
                <div className="flex justify-center gap-4">
                <Button type="submit" className="w-1/2">Register</Button>
                </div>
        
            </CardContent>
        </Card>
    );
}


