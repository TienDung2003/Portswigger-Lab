# Cross-site scripting (XSS) 
## Tổng quan

Cross-site scripting (còn được gọi là XSS) là một lỗ hổng bảo mật web cho phép kẻ tấn công xâm phạm các tương tác mà người dùng có với một ứng dụng dễ bị tấn công. Nó cho phép kẻ tấn công lách chính sách cùng nguồn gốc, được thiết kế để tách biệt các trang web khác nhau với nhau. Các lỗ hổng cross-site scripting thường cho phép kẻ tấn công ngụy trang thành người dùng nạn nhân, thực hiện bất kỳ hành động nào mà người dùng có thể thực hiện và truy cập bất kỳ dữ liệu nào của người dùng. Nếu người dùng nạn nhân có quyền truy cập đặc quyền trong ứng dụng, thì kẻ tấn công có thể giành được quyền kiểm soát hoàn toàn đối với tất cả các chức năng và dữ liệu của ứng dụng.

Tấn công XSS đang được thực hiện ở phía client. Nó có thể được thực hiện với các ngôn ngữ lập trình phía client khác nhau. Tuy nhiên, thường xuyên nhất cuộc tấn công này được thực hiện với Javascript và HTML.

## Cách thức hoạt động

Cross-site scripting hoạt động bằng cách thao túng một trang web dễ bị tấn công để trả về JavaScript độc hại cho người dùng. Khi mã độc hại thực thi bên trong trình duyệt của nạn nhân, kẻ tấn công có thể xâm phạm hoàn toàn tương tác của họ với ứng dụng.

![alt text](image.png)

## Các dạng lỗ hổng Cross-site scripting (XSS)
XSS thường được chia làm 3 dạng chính:

* `Reflected XSS:` xảy ra khi mã độc được truyền vào trang web bằng cách sử dụng một liên kết hoặc biểu mẫu web. (Script độc hại có nguồn gốc từ request HTTP hiện tại)

* `Stored XSS:` xảy ra khi mã độc được lưu trữ trên máy chủ và được thực thi khi người dùng truy cập trang web có chứa mã độc đó. (Script độc hại có nguồn gốc từ phía máy chủ, chẳng hạn database)
* `DOM-based XSS:` xảy ra khi mã độc được chèn vào trang web bằng cách sử dụng các tài nguyên không được lưu trữ trên máy chủ, mà được tải từ máy chủ và xử lý trên trình duyệt của người dùng. (Script độc hại tồn tại trong client-side code)

