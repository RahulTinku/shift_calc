import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListEmployeeService } from './list-employee.service';
import { CommonService } from '../common/commonService';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
	list : any = [];
  finalList : any =[];
	employeeData : any;
  thisEmployeeData : any;
	attendanceData : any;
	showCal : boolean = false;
  emp_id : any;
  showAddUsers : boolean = false;
  isEmployeeDisplayed : boolean = false;
  loading : boolean = true;
  noUser : boolean = false;
  serverError : boolean = false;
	  //sorting
  	key: string = 'name'; //set default
  	reverse: boolean = false;
  	//initializing p to one
  	p: number = 1;

  constructor(
  	private router : Router,
    private route: ActivatedRoute, 
  	private _list : ListEmployeeService,
  	private _common : CommonService) { }

  ngOnInit() {
    this.showAddUsers = false;
    this.isEmployeeDisplayed = false;
    this.loading = true;
    this.serverError = false;
    this.finalList.length = 0;
    this.emp_id = this.route.snapshot.paramMap.get('id');
    this._common.setEmpId(this.emp_id);

    this._list.getEmployee(this.emp_id)
        .subscribe((response) => {
          if(response && response.length !==0){
            this.thisEmployeeData = response;
            this.isEmployeeDisplayed = true;
            this.loading = false;
            this.noUser = false;
            if(this.thisEmployeeData.emp_type === 'Manager'){
              this.showAddUsers = true;
            }
          }else{
            this.loading = false;
            this.noUser = true;
          }
        }, (error)=>{
          if(error === 'Unauthorized' || error === 'Forbidden'){
            this.router.navigate(['/']);
          }else {
            this.serverError = true;
          }
        })

  	this._list.getList(this.emp_id)
  			.subscribe(response => {
          if(response && response.length !== 0){
            this.loading = true;
    				this.list = response;
            this.list.map((item, index)=> {
              this.finalList.push(item);
              this._list.getList(item._id)
                .subscribe((res) => {
                  if(res && res.length !== 0){
                    res.map((emp, index) => {
                      this.finalList.push(emp);
                    })
                  }
                })
            })
            this.loading = false;
          }else{
            this.loading = false;
            this.noUser = true;
          }
  			}, (error)=>{
          if(error === 'Unauthorized' || error === 'Forbidden'){
            this.router.navigate(['/']);
          }
        })
    //console.log(this.finalList)
  }

  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  goToUser(_id) {
    this.router.navigate(['/employee', _id]);
  }

  calculate(employee){
  	this.showCal = true;
    this.loading = true;
  	this._list.getAttendance(employee.id)
  			.subscribe(response => {
          this.loading = false;
  				this.attendanceData = response;
  				this._common.setData(response);
  				this.router.navigate(['calculate']);
  			}, (error)=>{
          if(error === 'Unauthorized' || error === 'Forbidden'){
            this.router.navigate(['/']);
          }
        })
  	//console.log(employee);
  }

  calulateAll(){
  	//console.log(this.list);
  	this._common.setData(this.finalList);
  	this.router.navigate(['calculate']);
  }

  addUser(){
    this.router.navigate(['/addloginuser', this.thisEmployeeData._id]);
  }

  addemployee(){
  	this.router.navigate(['/adduser', this.thisEmployeeData._id]);
  }

}
