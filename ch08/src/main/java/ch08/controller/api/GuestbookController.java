package ch08.controller.api;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch08.dto.JsonResult;
import ch08.vo.GuestBookVo;

@RestController
@RequestMapping("/api/guestbook")
public class GuestbookController {

	@PostMapping
	public JsonResult ex01(@RequestBody GuestBookVo vo) {
		vo.setNo(1);
		vo.setPassword("");

		return JsonResult.success(vo);
	}
}