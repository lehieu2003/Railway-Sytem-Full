import { Grid, Item } from "./DiscountContentElement";

const DiscountContent = () => {
  return (
    <div className="flex flex-col mb-8 mt-8">
      <span className="text-customBlue font-bold mb-3">
        Khuyến mại cho chiều đi
      </span>
      <Grid>
        <Item className="text-center">Nội dung </Item>
        <Item className="text-center">Chi tiết</Item>
        <Item>
          Thời gian áp dụng chương trình từ 29/01/24 đến 16/05/24. Giảm giá vé
          khứ hồi lượt về theo VB 1269/VTSG-KD&CSKH ngày 02/10/2023{" "}
        </Item>
        <Item>Giảm 10% khi mua vé khứ hồi lượt về</Item>
        <Item>
          Thời gian áp dụng chương trình từ 07/05/24 đến 31/12/24. Khách hàng
          hạng VIP năm 2024{" "}
        </Item>
        <Item>Giảm giá 20% cho khách hàng hạng VIP</Item>
      </Grid>
    </div>
  );
};

export default DiscountContent;
