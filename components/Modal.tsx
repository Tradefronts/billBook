import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import Input from "./Input";

const Modal = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

export default Modal;

export const EditModal = ({
  isEditOpen,
  setIsEditOpen,
  title,
  
}) => {
  return (
    <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
      <DialogContent className="w-full p-0">
        <DialogHeader className="bg-gray-100 rounded-t-md p-4">
          <div className="w-full flex items-center justify-between">
            <DialogTitle className="capitalize">Edit {title}</DialogTitle>
            <DialogClose className="border cursor-pointer border-gray-300 p-2 rounded-xs opacity-70 hover:opacity-100">
              <X size={15} className="" />
            </DialogClose>
          </div>
        </DialogHeader>

        <div className="p-3">
            <Input label="Category Name" placeholder="Ex: Snacks" textSize="text-xs"/>
        </div>
        <DialogFooter>
          <div className="w-full  p-3 flex items-center justify-between border-t border-gray-300">
            <Button className="text-red-600 p-0 text-xs font-semibold bg-white hover:bg-white cursor-pointer">
              Delete Category
            </Button>
            <div className="space-x-3">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Add</Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};


export const AddModal = ({
    isAddOpen,
    setIsAddOpen,
    title
}) => {
    return (
        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
            <DialogContent className="w-full p-0">
                <DialogHeader className="bg-gray-100 rounded-t-md p-4">
                    <div className="w-full flex items-center justify-between">
                        <DialogTitle className="capitalize">{title}</DialogTitle>
                        <DialogClose className="border cursor-pointer border-gray-300 p-2 rounded-xs opacity-70 hover:opacity-100">
                            <X size={15} className="" />
                        </DialogClose>
                    </div>
                </DialogHeader>

                <div className="px-5">
                    <Input label="Category Name" placeholder="Ex: Snacks" textSize="text-xs" />
                </div>
                <DialogFooter className="w-full flex items-center justify-end border-t p-4 border-gray-300 ">
                    
                        <div className="space-x-3">
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Add</Button>
                        </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};


// export const AddUserModal = ({ isAdduserClicked, setIsAdduserClicked })=>{
//   <Dialog open={isAdduserClicked} onOpenChange={setIsAdduserClicked}>
//     <DialogContent className="w-full p-0">
//       <DialogHeader className="bg-gray-100 rounded-t-md p-4">
//         <div className="w-full flex items-center justify-between">
//           <DialogTitle className="capitalize">{title}</DialogTitle>
//           <DialogClose className="border cursor-pointer border-gray-300 p-2 rounded-xs opacity-70 hover:opacity-100">
//             <X size={15} className="" />
//           </DialogClose>
//         </div>
//       </DialogHeader>

//       <div className="px-5">
//         <Input label="Category Name" placeholder="Ex: Snacks" textSize="text-xs" />
//       </div>
//       <DialogFooter className="w-full flex items-center justify-end border-t p-4 border-gray-300 ">

//         <div className="space-x-3">
//           <DialogClose asChild>
//             <Button variant="outline">Cancel</Button>
//           </DialogClose>
//           <Button type="submit">Add</Button>
//         </div>
//       </DialogFooter>
//     </DialogContent>
//   </Dialog>
// }
