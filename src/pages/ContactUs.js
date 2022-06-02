import React from "react";
import { motion } from "framer-motion";
import { pageAnim } from "../animation";

const ContactUs = () => {
    return(
        <motion.div exit='exit' variants={pageAnim} initial='hidden' animate='show'>
            <h1>Contact Us</h1>
        </motion.div>
    )
}

export default ContactUs