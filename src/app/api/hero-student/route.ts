// import { NextResponse } from "next/server";
// import fs from "fs";
// import path from "path";

// export async function GET() {
//   const sourcePath =
//     "C:\\Users\\sujon\\.gemini\\antigravity-ide\\brain\\afac674e-2929-45b4-9da0-c0a034e8e438\\hero_student_lime_1790697502448.jpg";
//   const targetDir = path.join(process.cwd(), "public", "images");
//   const targetPath = path.join(targetDir, "student.jpg");

//   try {
//     if (fs.existsSync(sourcePath)) {
//       if (!fs.existsSync(targetDir)) {
//         fs.mkdirSync(targetDir, { recursive: true });
//       }
//       if (!fs.existsSync(targetPath)) {
//         fs.copyFileSync(sourcePath, targetPath);
//       }
//       const buffer = fs.readFileSync(targetPath);
//       return new NextResponse(buffer, {
//         headers: {
//           "Content-Type": "image/jpeg",
//           "Cache-Control": "public, max-age=31536000, immutable",
//         },
//       });
//     }
//   } catch (error) {
//     console.error("Failed to copy/serve student image:", error);
//   }

//   return new NextResponse("Not Found", { status: 404 });
// }
