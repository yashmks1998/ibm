package ibm.quiz.demoQuiz.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ibm.quiz.demoQuiz.entities.Questions;
import ibm.quiz.demoQuiz.services.QuestionService;





@CrossOrigin
@RestController
@RequestMapping(path="/api")
public class QuestionController {
	
	@Autowired
	QuestionService questionService;
	@PostMapping("/question")
	public ResponseEntity<Void> addQuestion(@RequestBody Questions question){
		ResponseEntity<Void> re= null;
		
		try{
			questionService.addQuestion(question);
			re = new ResponseEntity<>(HttpStatus.CREATED);;
			
		}
		catch(EmptyResultDataAccessException e){
			re = new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
		}
		
		
		return re;
	}
	
	@GetMapping("/question")
	public List<Questions> findEmployee(){

		List<Questions> questionss = questionService.fetchAllQuestions();
		return questionss;
	}
//	

}