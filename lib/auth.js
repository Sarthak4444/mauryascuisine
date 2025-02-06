import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';  

export async function verifyToken() {
  const cookieStore = cookies(); 
  const token = cookieStore.get('token')?.value;  
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return decoded; 
  } catch (error) {
    return null;
  }
}

export async function verifyAdminToken() {
  const cookieStore = cookies(); 
  const admintoken = cookieStore.get('admintoken')?.value;  
  if (!admintoken) return null;

  try {
    const decoded = jwt.verify(admintoken, process.env.JWT_SECRET_KEY);
    return decoded; 
  } catch (error) {
    return null;
  }
}
