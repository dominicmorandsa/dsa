<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class News extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/news
	 *	- or -
	 * 		http://example.com/index.php/news/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$data['theNews'] = array("This is the news...",
			                     "Some more news...",
			                     "Even more news...");
		$this->load->view('templates/news_header');
		$this->load->view('news_message', $data);
		$this->load->view('templates/news_footer');
	}
}
