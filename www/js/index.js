/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 $(window, document, undefined).ready(function(){

    $('input').blur(function() {
        var $this = $(this);
        if($this.val())
            $this.addClass('used');
        else
            $this.reomveClass('used');
    });

    var $ripples = ('.ripples');

    $ripples.on('click.Ripples', function(e)){
        var $this = $(this);
        car $offset = $this.parent().offset();
        var $circle = $this.find('.ripplesCircle');

        var x = e.pageX - $offset.left;
        var y = e.pageY - $offset.top;

        $circle.css({
            top: y + 'px',
            left: x + 'px'
        });

        $this.addClass('is-active');

        $ripples.on('animationed webkitAnimationEnd mozAnimationEnd oanimationed MSAnimationEnd, function(e) {
            $(this).removeClass('is-active');
        });

    }
});
