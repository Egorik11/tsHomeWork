class School {
  directions: any[] = [];

  addDirection(direction: any): void {
    this.directions.push(direction);
  }
}

class Direction {
  levels: any[] = [];
  _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  addLevel(level: any): void {
    this.levels.push(level);
  }
}

class Level {
  groups: any[] = [];

  _name: string;
  _program: any;

  constructor(name: string, program: any) {
    this.name = name;
    this._program = program;
  }

  get name(): string {
    return this._name;
  }

  get program(): any {
    return this._program;
  }

  addGroup(group: any): void {
    this.groups.push(group);
  }
}

class Group {
  _students: any[] = [];
  directionName: string;
  levelName: string;

  get students(): any[] {
    return this._students;
  }

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  addStudent(student: any): void {
    this._students.push(student);
  }

  showPerformance() {
    const sortedStudents = this.students.toSorted(
      (a: any, b: any) => b.getPerformanceRating() - a.getPerformanceRating(),
    );

    return sortedStudents;
  }
}

class Student {
  grades = {};
  attendance = [];
  firstName: string;
  lastName: string;
  birthYear: number;

  constructor(firstName: string, lastName: string, birthYear: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value: string) {
    [this.lastName, this.firstName] = value.split(' ');
  }

  get age(): number {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject: string, grade: any): void {
    this.grades[subject] = grade;
  }

  markAttendance(present: boolean): void {
    this.attendance.push(present);
  }

  getPerformanceRating(): number {
    const gradeValues = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage =
      (this.attendance.filter((present) => present).length /
        this.attendance.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
