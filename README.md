# SE_Project-Sem_231
Đây là repository cho môn Công nghệ phần mềm HK231.

***(Lưu ý: trong phiên bản hiện tại, phần code web được push lên repo này vẫn còn đang là template cho các thành viên tìm hiểu và vọc vạch, front-end chưa edit xong và các hình ảnh, text chỉ là minh hoạ. Về sau khi front-end đã edit xong cũng như các chức năng đã được hiện thực, vui lòng xoá dòng này cũng như cập nhật file README này. File README này nên được cập nhật thường xuyên theo quá trình hiện thực web)***

## Khởi chạy web
Sau khi cài đặt NodeJS lên máy và clone project này, mở terminal tại thư mục vừa clone và gõ:
```
node app.js
```
Sau đó, mở trình duyệt và vào địa chỉ: localhost:8080/homepage 

## Một số thông tin về web
### Công nghệ được sử dụng
- Front-end:
    - HTML + CSS
    - Bootstrap 5
    - Javascript
    - jQuery
    - Web có sử dụng template được chia sẻ miễn phí tại [đây](https://themewagon.com/themes/restoran-free-responsive-bootstrap-5-restaurant-website-template/)
- Back-end:
    - Server code: NodeJS v20
    - Database: Chưa có. Dữ liệu hiện tạm thời được hard-code, về sau khi đã chọn database sẽ cập nhật sau
### Các trang hiện có và quyền truy cập
Trang hiện có 3 mức phân quyền: khách (tức chưa đăng nhập), sinh viên (student) và nhân viên văn phòng tài chính (financer). Các trang có trong web và khả năng truy cập cho từng mức phân quyền bao gồm:
- Trang chủ, về hệ thống: mọi người, bao gồm cả khách
- In ấn, phản hồi: chỉ dành cho student và financer
- Thống kê: chỉ dành cho financer
- Đăng nhập, đăng ký: đương nhiên chỉ dành cho khách khi chưa đăng nhập

Web hiện dùng session để hiện thực việc phân quyền này, và trong file `connect_db` trong thư mục `model` đã có sẵn hai tài khoản được hard-code để kiểm tra.
Ngoài ra, khi thực hiện đăng ký một tài khoản qua chức năng đăng ký của web, quyền mặc định sẽ là student.
### Các lưu ý khác
- Trang web được viết theo mô hình MVC (Model - View - Controller). Các thành viên nên tìm hiểu qua mô hình này, cách triển khai mô hình trên NodeJS để hiện thực theo mô hình này.
- Các file `.ejs` nằm trong thư mục `views` về bản chất chỉ là các file HTML. Cụ thể hơn, web sử dụng thư viện EJS nhằm cho phép nhúng một số code Javascript trực tiếp vào trong HTML nhằm điều khiển việc hiển thị của một số đoạn HTML. Các thành viên nên tìm hiểu về thư viện này để sử dụng. 
    - Ví dụ dễ hiểu, các bạn hãy khởi chạy web, để ý thanh điều hướng khi chưa đăng nhập thì sẽ có nút đăng nhập, nhưng khi đã đăng nhập rồi thì nút này lại chuyển thành nút dẫn đến profile, và thanh điều hướng xuất hiện thêm một số trang cũng như nút đăng xuất. EJS cho phép nhúng code vào HTML để hiện thực việc này, và do đó đuôi của tất cả file trong views sẽ là `.ejs`. Các code được nhúng được đặt trong cặp dấu có dạng <% %> hoặc <%- %> (hãy tìm hiểu thêm về sự khác nhau).
- Trang web đã hiện thực tính năng đăng nhập, đăng ký, thông qua session. Trong code đã có sẵn thư viện hỗ trợ cookie, tuy nhiên trong phiên bản hiện tại không hiện thực vì muốn hạn chế lưu cookie linh tinh trong quá trình test.
- Do chưa hiện thực kết nối database nên các tài khoản được đăng ký thông qua chức năng đăng ký chỉ được lưu trên RAM, và khi tắt trình duyệt đi rồi mở lại và truy cập lại, các tài khoản này sẽ mất. Chỉ có các tài khoản đang được hard-code là luôn còn.
- Do quy tắc về static file (file tĩnh, cụ thể là các file CSS, JS, ảnh lấy trực tiếp từ trong máy chủ) của thư viện Express, tất cả các thư mục file tĩnh đều được đặt trong thư mục `assets`, và các thuộc tính về đường dẫn (`src`, `href`,...) để truy cập đến các file tĩnh này trong các file `.ejs` của thư mục `views` đều là đường dẫn tuyệt đối từ thư mục gốc (luôn bắt đầu bằng `/`) nhưng không bao gồm tên thư mục `assets`. Các thành viên có thể tìm hiểu thêm về vần đề static file trong thư viện Express, nếu muốn hiểu hơn và tránh rắc rối khi hiện thực mà thấy ảnh không hiện về sau.
    - Ví dụ: trong file `script.ejs`, để kết nối tới một file js sẽ như sau: `<script src="/js/main.js"></script>`
- Nếu có hiện thực database hoặc đổi database về sau, chỉ cần thay đổi file `connect_db` và các file model đối tượng liên quan (như hiện tại là file `users`) trong thư mục `model`. Code hiện tại đã cố gắng chia tách phần model kết nối database này với phần model của từng page trong web nhằm đảm bảo khi hiện thực hoặc đổi database, chỉ cần thay đổi kết nối trong `connect_db` và thay đổi các câu lệnh truy vấn trong các file model đối tượng liên quan, còn API mà các file đối tượng cung cấp ra là không đổi và không cần sửa (tuân thủ tối da bộ quy tắc quan trọng trong lập trình: SOLID)
- Trang web có vài thiết lập liên quan đến bảo mật thông qua các thư viện: `helmet`, `express-rate-limit`.

Lời cuối, chúc tất cả một ngày tốt lành!
