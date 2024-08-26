import Title from '../common/Title';

export default function Contacts() {
  return (
    <div className="w-full bg-gray-800 p-20 flex items-start flex-col space-y-5 text-white" id="contacts">
      <Title title="Contact Me" borderColor="bg-white"></Title>
      <div className="space-x-5 flex w-full">
        <input type="text" className="w-full p-3 outline-none focus:outline-white outline-gray-400 bg-gray-700 rounded-md " placeholder="Name" />

        <input type="text" className="w-full p-3 outline-none focus:outline-white outline-gray-400 bg-gray-700 rounded-md " placeholder="Email" />
      </div>
      <textarea
        name=""
        id=""
        className="bg-gray-700 w-full p-3 focus:outline-white max-h-32 min-h-24 outline-none rounded-md outline-gray-400"
        placeholder="Enter Message"
      ></textarea>
      <button className="bg-white transition duration-200 active:scale-95 text-gray-800 p-4 rounded-md w-full">Submit</button>
    </div>
  );
}
