/// <reference path="Typings/jquery.d.ts" />
var Orchard;
(function (Orchard) {
    var Azure;
    (function (Azure) {
        var MediaServices;
        (function (MediaServices) {
            var Admin;
            (function (Admin) {
                var Common;
                (function (Common) {
                    $(function () {
                        $("form").on("click", "button[data-prompt], a[data-prompt]", function (e) {
                            var prompt = $(this).data("prompt");
                            if (!confirm(prompt))
                                e.preventDefault();
                        });
                    });
                })(Common = Admin.Common || (Admin.Common = {}));
            })(Admin = MediaServices.Admin || (MediaServices.Admin = {}));
        })(MediaServices = Azure.MediaServices || (Azure.MediaServices = {}));
    })(Azure = Orchard.Azure || (Orchard.Azure = {}));
})(Orchard || (Orchard = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3VkbWVkaWEtYWRtaW4tY29tbW9uLnRzIl0sIm5hbWVzIjpbIk9yY2hhcmQiLCJPcmNoYXJkLkF6dXJlIiwiT3JjaGFyZC5BenVyZS5NZWRpYVNlcnZpY2VzIiwiT3JjaGFyZC5BenVyZS5NZWRpYVNlcnZpY2VzLkFkbWluIiwiT3JjaGFyZC5BenVyZS5NZWRpYVNlcnZpY2VzLkFkbWluLkNvbW1vbiJdLCJtYXBwaW5ncyI6IkFBQUEsNENBQTRDO0FBRTVDLElBQU8sT0FBTyxDQVNiO0FBVEQsV0FBTyxPQUFPO0lBQUNBLElBQUFBLEtBQUtBLENBU25CQTtJQVRjQSxXQUFBQSxLQUFLQTtRQUFDQyxJQUFBQSxhQUFhQSxDQVNqQ0E7UUFUb0JBLFdBQUFBLGFBQWFBO1lBQUNDLElBQUFBLEtBQUtBLENBU3ZDQTtZQVRrQ0EsV0FBQUEsS0FBS0E7Z0JBQUNDLElBQUFBLE1BQU1BLENBUzlDQTtnQkFUd0NBLFdBQUFBLE1BQU1BLEVBQUNBLENBQUNBO29CQUM3Q0MsQ0FBQ0EsQ0FBQ0E7d0JBQ0VBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLE9BQU9BLEVBQUVBLHFDQUFxQ0EsRUFBRUEsVUFBU0EsQ0FBQ0E7NEJBQ25FLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBRXBDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dDQUNqQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQzNCLENBQUMsQ0FBQ0EsQ0FBQ0E7b0JBQ1BBLENBQUNBLENBQUNBLENBQUNBO2dCQUNQQSxDQUFDQSxFQVR3Q0QsTUFBTUEsR0FBTkEsWUFBTUEsS0FBTkEsWUFBTUEsUUFTOUNBO1lBQURBLENBQUNBLEVBVGtDRCxLQUFLQSxHQUFMQSxtQkFBS0EsS0FBTEEsbUJBQUtBLFFBU3ZDQTtRQUFEQSxDQUFDQSxFQVRvQkQsYUFBYUEsR0FBYkEsbUJBQWFBLEtBQWJBLG1CQUFhQSxRQVNqQ0E7SUFBREEsQ0FBQ0EsRUFUY0QsS0FBS0EsR0FBTEEsYUFBS0EsS0FBTEEsYUFBS0EsUUFTbkJBO0FBQURBLENBQUNBLEVBVE0sT0FBTyxLQUFQLE9BQU8sUUFTYiIsImZpbGUiOiJjbG91ZG1lZGlhLWFkbWluLWNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJUeXBpbmdzL2pxdWVyeS5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBPcmNoYXJkLkF6dXJlLk1lZGlhU2VydmljZXMuQWRtaW4uQ29tbW9uIHtcclxuICAgICQoKCkgPT4ge1xyXG4gICAgICAgICQoXCJmb3JtXCIpLm9uKFwiY2xpY2tcIiwgXCJidXR0b25bZGF0YS1wcm9tcHRdLCBhW2RhdGEtcHJvbXB0XVwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciBwcm9tcHQgPSAkKHRoaXMpLmRhdGEoXCJwcm9tcHRcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbmZpcm0ocHJvbXB0KSlcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59ICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==