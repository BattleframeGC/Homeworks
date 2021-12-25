<?php
function get_all_tasks(){
    return [
        [
            'title'=>'Задача 1',
            'date'=>date_create('yesterday'),
            'participants'=>['Артур', 'Полина'],
            'closed'=>false
        ],
        [
            'title'=>'Задача 2',
            'date'=>date_create('tomorrow'),
            'participants'=>[],
            'closed'=>false
        ],
        [
            'title'=>'Задача 3',
            'date'=>date_create(),
            'participants'=>['Артур', 'Глеб'],
            'closed'=>false
        ],
        [
            'title'=>'Задача 4',
            'date'=>date_create('yesterday'),
            'participants'=>['Павел', 'Полина'],
            'closed'=>true
        ]
    ];
}


function filter(array $get_all_tasks, $requirement)
{
    foreach($get_all_tasks as $task)
    {
        
        if($requirement == "new") // НОВЫЕ ЗАДАЧИ (Дата задачи > date_create())
        {
          if($task['date'] > date_create())
          {
            $newArr[] = $task;
          }
        }
            if($requirement == "closed") // ЗАКРЫТЫЕ ЗАДАЧИ (со значением closed равным true)
            {
              if($task['closed'])
              {
                $newArr[] = $task;
              }
            }
                if($requirement == "unmatched") // НЕВЫПОЛНЕННЫЕ ЗАДАЧИ (со значением closed равным false и датой меньше date_create())
                {
                  if(!$task['closed'] && $task['date'] < date_create())
                  {
                    $newArr[] = $task;
                  }
                }
    }
    return($newArr);
        
}

print_r(filter(get_all_tasks(),"new"));