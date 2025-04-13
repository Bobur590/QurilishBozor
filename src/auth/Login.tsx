import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "", remember: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // Add login logic here
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white shadow-2xl rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Kirish</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
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
          <Link to="/register" className="text-sm text-blue-600 hover:underline">
            Ro'yxatdan o'tish
          </Link>
        </div>
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Kirish
        </Button>
      </form>
    </div>
  );
}
