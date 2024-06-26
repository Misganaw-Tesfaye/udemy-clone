<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'course_id'];

    public function cource(){
        return $this->belongsTo(Course::class);
    }
    public function lectures(){
        return $this->hasMany(Lecture::class);
    }
}
