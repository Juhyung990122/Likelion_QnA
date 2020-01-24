from django.db import models
from django.conf import settings

class Question(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL,default = 1,on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=1000)
    content = models.TextField()
    image = models.ImageField(max_length=1000,blank=True,null=True)
    views_num = models.PositiveIntegerField(default = 0)
    
    class Meta:
        ordering = ['-id']

    def views_counter(self):
        self.views_num = self.views_num + 1
        self.save()

class Answer(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL,default = 1,on_delete=models.CASCADE)
    question_num = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='answer')
    date = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=1000)
    content = models.TextField()
    image = models.ImageField(max_length=1000,blank=True,null=True)

    class Meta:
        ordering = ['-id']

    


