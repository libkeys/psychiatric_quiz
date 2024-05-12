from django.db import models


# Create your models here.
class Answers(models.Model):
    idanswer = models.AutoField(
        db_column="idAnswer", primary_key=True
    )  # Field name made lowercase.
    idpoll = models.ForeignKey(
        "Polls", models.DO_NOTHING, db_column="idPoll", blank=True, null=True
    )  # Field name made lowercase.
    answerpoints = models.IntegerField(
        db_column="answerPoints", blank=True, null=True
    )  # Field name made lowercase.
    addition = models.TextField(
        db_collation="utf8mb3_general_ci", blank=True, null=True
    )
    idquestion = models.IntegerField(
        db_column="idQuestion", blank=True, null=True
    )  # Field name made lowercase.
    idmethod = models.IntegerField(
        db_column="idMethod", blank=True, null=True
    )  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = "answers"


class Classes(models.Model):
    classnumber = models.IntegerField(
        db_column="classNumber", blank=True, null=True
    )  # Field name made lowercase.
    classletter = models.CharField(
        db_column="classLetter",
        max_length=1,
        db_collation="utf8mb3_general_ci",
        blank=True,
        null=True,
    )  # Field name made lowercase.
    userid = models.ForeignKey(
        "Users", models.DO_NOTHING, db_column="userId", blank=True, null=True
    )  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = "classes"


class Methods(models.Model):
    idmethod = models.AutoField(
        db_column="idMethod", primary_key=True
    )  # Field name made lowercase.
    name = models.CharField(
        max_length=200, db_collation="utf8mb3_general_ci", blank=True, null=True
    )

    class Meta:
        managed = False
        db_table = "methods"


class Polls(models.Model):
    idpoll = models.AutoField(
        db_column="idPoll", primary_key=True
    )  # Field name made lowercase.
    idstudent = models.ForeignKey(
        "Students", models.DO_NOTHING, db_column="idStudent", blank=True, null=True
    )  # Field name made lowercase.
    date = models.DateField(blank=True, null=True)
    type = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = "polls"


class Questions(models.Model):
    idquestion = models.AutoField(
        db_column="idQuestion", primary_key=True
    )  # Field name made lowercase.
    idmethod = models.ForeignKey(
        Methods, models.DO_NOTHING, db_column="idMethod", blank=True, null=True
    )  # Field name made lowercase.
    text = models.TextField(db_collation="utf8mb3_general_ci", blank=True, null=True)

    class Meta:
        managed = False
        db_table = "questions"


class Students(models.Model):
    studentclass = models.ForeignKey(
        Classes, models.DO_NOTHING, db_column="studentClass", blank=True, null=True
    )  # Field name made lowercase.
    studentname = models.CharField(
        db_column="studentName",
        max_length=15,
        db_collation="utf8mb3_general_ci",
        blank=True,
        null=True,
    )  # Field name made lowercase.
    studentsurname = models.CharField(
        db_column="studentSurname",
        max_length=20,
        db_collation="utf8mb3_general_ci",
        blank=True,
        null=True,
    )  # Field name made lowercase.
    studentlastname = models.CharField(
        db_column="studentLastname",
        max_length=20,
        db_collation="utf8mb3_general_ci",
        blank=True,
        null=True,
    )  # Field name made lowercase.
    classnumber = models.IntegerField(
        db_column="classNumber", blank=True, null=True
    )  # Field name made lowercase.
    classletter = models.CharField(
        db_column="classLetter",
        max_length=1,
        db_collation="utf8mb3_general_ci",
        blank=True,
        null=True,
    )  # Field name made lowercase.
    studentbirthdate = models.DateField(
        db_column="studentBirthDate", blank=True, null=True
    )  # Field name made lowercase.
    userid = models.ForeignKey(
        "Users", models.DO_NOTHING, db_column="userId", blank=True, null=True
    )  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = "students"


class Users(models.Model):
    iduser = models.AutoField(
        db_column="idUser", primary_key=True
    )  # Field name made lowercase.
    login = models.CharField(
        max_length=16, db_collation="utf8mb3_general_ci", blank=True, null=True
    )
    password = models.CharField(
        max_length=16, db_collation="utf8mb3_general_ci", blank=True, null=True
    )

    class Meta:
        managed = False
        db_table = "users"
