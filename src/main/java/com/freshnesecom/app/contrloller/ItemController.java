package com.freshnesecom.app.contrloller;

import com.freshnesecom.app.model.Item;
import com.freshnesecom.app.service.ItemService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@CrossOrigin
@RestController
@AllArgsConstructor
@RequestMapping(path = "/product")
@SessionAttributes({"login"})
public class ItemController {
	private ItemService itemService;

	@GetMapping("/{id}")
	public ResponseEntity<Item> getItem(@PathVariable Long id) {
		return ResponseEntity.of(itemService.findById(id));
	}

	@PreAuthorize("hasAuthority('ADMIN')")
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Item> add(@RequestBody Item item) {
		return ResponseEntity.of(itemService.add(item));
	}

	@GetMapping(value = "related/{ids}")
	public ResponseEntity<List<Item>> getItemsByIds(@PathVariable String ids) {
		final Long[] arrayID = Arrays.stream(ids.split(",")).map(Long::parseLong).toArray(Long[]::new);
		return ResponseEntity.ok(itemService.findByIds(arrayID));
	}

	@PreAuthorize("hasAuthority('ADMIN')")
	@DeleteMapping(value = "delete/{id}")
	public ResponseEntity<Item> delete(@PathVariable Long id) {
		return itemService.delete(id)
				? ResponseEntity.noContent().build()
				: ResponseEntity.notFound().build();
	}
}
