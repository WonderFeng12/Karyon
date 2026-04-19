import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../constants';

// Initialize EmailJS once
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export default emailjs;