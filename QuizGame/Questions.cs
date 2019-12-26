using System;

namespace QuizGame
{
    public class Questions
    {
        public int Round { get; set; }

        public Question[] QuestionList { get; set; }
    }
    public class Question
    {
        public string Player { get; set; }
        public string Statement { get; set; }
        public string Answer { get; set; }
    }
}
