
  
package ibm.quiz.demoQuiz.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import ibm.quiz.demoQuiz.entities.Questions;
import ibm.quiz.demoQuiz.entities.Quiz;
import ibm.quiz.demoQuiz.repo.QuizRepository;



@Service
public class QuizService {
	
	@Autowired
	QuizRepository quizRepository;
	
	public List<Quiz> fetchAllQuiz(){
		System.out.println(quizRepository.findAll());
		
		return quizRepository.findAll();
		
	}

	

	public void addQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		try {
//			employeeRepository.addEmployee(toAdd);
			quizRepository.save(quiz);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public List<Quiz> findAllQuiz() {
		List<Quiz> quizzes =  quizRepository.findAll();
//		System.out.println(quizzes);
		return quizzes;
	}
	public Quiz findQuizByName(String name) {
		return quizRepository.findByName(name);
	}

//

}
