import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Parollar mos kelmadi!");
    } else {
      console.log("Ro'yxatdan o'tish ma'lumotlari:", form);
      // Ro'yxatdan o'tish logikasini qo'shing
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Ro'yxatdan o'tish</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Email manzilingiz"
          />
        </div>
        <div>
          <Label htmlFor="password">Parol</Label>
          <Input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="Parolingiz"
          />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Parolni tasdiqlash</Label>
          <Input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Parolni tasdiqlang"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              name="remember"
              checked={form.remember}
              onChange={() => setForm({ ...form, remember: !form.remember })}
            />
            <Label htmlFor="remember">Eslab qol</Label>
          </div>
          <Link to="/login" className="text-sm text-blue-500 hover:underline">
            Kirish sahifasiga o'tish
          </Link>
        </div>
        <Button type="submit" className="w-full">
          Ro'yxatdan o'tish
        </Button>
      </form>
    </div>
  );
}
