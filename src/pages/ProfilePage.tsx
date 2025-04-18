// pages/ProfilePage.tsx
import Sidebar from "../components/Sidebar";
import { Button } from "../components/ui/button";

const listings = [
  {
    title: "Wooden planks",
    description: "$500",
    image: "/wood.png",
  },
  {
    title: "Bricks",
    description: "Tarashkent",
    image: "/bricks.png",
  },
  {
    title: "Concrete blocks",
    description: "Tarhshkent",
    image: "/blocks.png",
  },
];

const ProfilePage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-gray-600">johndoe@example.com</p>
          <p className="text-gray-600 mb-8">+1 234 567 8900</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">My Listings</h2>
          <div className="space-y-4">
            {listings.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 bg-white rounded shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.title} className="w-12 h-12" />
                  <div>
                    <div className="font-medium text-lg">{item.title}</div>
                    <div className="text-gray-500">{item.description}</div>
                  </div>
                </div>
                <Button>Edit</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
