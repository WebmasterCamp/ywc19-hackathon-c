import Image from "next/image";
import Container from "../Container";

const Product = () => {
  return (
    <Container className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="relative w-full aspect-video">
            <Image
              src="/mock-up-picture.jpeg"
              fill={true}
              className="object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="font-bold text-2xl">
            Maliispa - น้ำมันมะพร้าวสกัดเย็น
          </h2>
          <p>
            จ.ชุมพร เป็นจังหวัดหนึ่งที่ติดทะเลของประเทศไทย
            ออกแบบกราฟิกบนบรรจุภัณฑ์ให้มีแนวคิดการพักผ่อน ริมทะเล บรรยากาศสบายๆ
            เหมือนเที่ยวริมทะเลและบนเกาะ
            เปลี่ยนรูปทรงขวดให้คล้ายกับขวดบรรจุน้ำดื่ม
            เพราะคุณสมบัติของน้ำมันมะพร้าวอเนกประสงค์ ใช้ทาได้ ดื่มได้
            ติดด้วยแผนที่ จ.ชุมพรและรอบๆ พร้อมห้อย tag
            สินค้าด้วยภาพประกอบรูปลูกมะพร้าว
          </p>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Detail
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Product;
