package com.freshnesecom.app.contrloller;

import com.freshnesecom.app.model.BreadCrumbs;
import com.freshnesecom.app.service.BreadCrumbService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@AllArgsConstructor
@RequestMapping(path = "/breadcrumbs")
public class BreadCrumbController {
	private BreadCrumbService breadCrumbService;

	@GetMapping(value = "/{id}")
	public ResponseEntity<List<BreadCrumbs>> getBreadCrumbs(@PathVariable("id") Long id) {
		return ResponseEntity.ok(breadCrumbService.createBreadCrumbs(id));
	}
}
