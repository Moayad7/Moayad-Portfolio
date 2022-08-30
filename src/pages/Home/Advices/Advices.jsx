import { motion , AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Modal from './Components/Modal/index';
import {ShowButton} from './Components/ShowButton'


function Advices() {

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  
  
  return (
    <div className=" border-b-2 border-dashed border-indigo-600 h-72 sm:h-full py-9 md:py-14 flex flex-col justify-center items-center lg:order-3 relative">
        <h1 className='text-indigo-600 italic'>Here you can take a random advice</h1>
        <ShowButton modalOpen={modalOpen} close={close} open={open}></ShowButton>
        <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={()=>null}
        >  
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}
        </AnimatePresence>
    </div>
  );
}

export default Advices
